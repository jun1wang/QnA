export const server = 'https://localhost:5001';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-1xzzj2ac.us.auth0.com',
  client_id: 'GdewoMVWvGyLYENXnOpB0q3frIL4xouO',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qna',
};
