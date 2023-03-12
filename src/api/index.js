import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aniwalk.tk',
});

// 소셜 로그인
export const socialLogin = async (accessToken, provider) => {
  return await api
    .post(`/api/login`, {
      accessToken: accessToken,
      provider: provider,
    })
    .then(res => res.data.data);
};
// 토큰 헤더 저장
export const socialToken = token => (api.defaults.headers.common['Authorization'] = `Bearer ${token}`);

// 랜덤 닉네임 생성
export const getNickName = async () => await api.get(`/api/users/nickname`).then(res => res.data.data);

// 이메일 인증 발송
export const emailAuthorizationSend = email => {
  return api.post('/api/auth/email', {email}).then(res => res.data);
};

// 이메일 인증 검증
export const emailAuthorizationConfirm = authKey => api.post('api/auth/email/verify', {authKey}).then(res => res.data);

// 회원가입
export const joinMemberShip = ({email, nickname, gender}) =>
  api
    .post('api/users', {
      email,
      nickname,
      gender,
    })
    .then(res => res.status);
