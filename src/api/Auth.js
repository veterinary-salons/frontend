/* eslint-disable camelcase */
import { baseUrl } from "../assets/constants/constants";

function makeRequest(url, method, body) {
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };

  const config = {
    method,
    headers,
    // Поменять перед деплоем на сервер
    credentials: 'omit',
    // credentials: 'include',
  };

  if (body) {
    config.body = JSON.stringify(body)
  };

  return fetch(`${baseUrl + url}`, config)
    .then((res) => res.ok ? res.json() : Promise.reject(res))
};

export function register(
  profile_type,
  first_name,
  last_name,
  phone_number,
  email,
  password
  ) {
  return makeRequest('/auth/signup/', 'POST', {
    profile_type,
    first_name,
    last_name,
    phone_number,
    email,
    password
  })
};

export function authorize(email, password) {
  return makeRequest('/auth/signin/', 'POST', {email, password})
};

export function sendEmailForRecovery(email) {
  return makeRequest('/auth/signin/recovery/', 'POST', {email})
};

export function sendCodeForRecovery(code) {
  return makeRequest('/auth/signin/recovery_code/', 'POST', {code})
};

export function setNewPassword(password) {
  return makeRequest('/auth/signin/recovery_password/', 'PATCH', {password})
};