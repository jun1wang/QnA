﻿using System;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using QnA.Data;

namespace QnA.Authorization
{
    public class MustBeQuestionAuthorHandler: AuthorizationHandler<MustBeQuestionAuthorRequirement>
    {
        private readonly IDataRepository _dataRepository;

        private readonly IHttpContextAccessor _httpContextAccessor;

        public MustBeQuestionAuthorHandler(IDataRepository dataRepository, IHttpContextAccessor httpContextAccessor)
        {
            _dataRepository = dataRepository;
            _httpContextAccessor = httpContextAccessor;
        }

        protected async override Task HandleRequirementAsync (
            AuthorizationHandlerContext context,
            MustBeQuestionAuthorRequirement requirement)
        {
            if (!context.User.Identity.IsAuthenticated)
            {
                context.Fail();
                return;
            }

            int questionId = Convert.ToInt32(_httpContextAccessor.HttpContext.Request.RouteValues["questionId"]);

            var userId = context.User.FindFirst(ClaimTypes.NameIdentifier).Value;

            var question = await _dataRepository.GetQuestion(questionId);

            if (question == null)
            {
                context.Succeed(requirement);

                return;
            }

            if (question.UserId != userId)
            {
                context.Fail();

                return;
            }

            context.Succeed(requirement);

        }
    }
}
