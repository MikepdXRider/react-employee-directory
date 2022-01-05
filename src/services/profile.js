import { client, parseData } from './client';

export async function getProfile() {
  const request = await client.from('profiles').select().single();
  return parseData(request);
}

export async function updateProfile({ name, email, bio, birthday }) {
  const request = await client
    .from('profiles')
    .update({ name, bio, birthday })
    .match({ email });
  return parseData(request);
}

export async function createProfile({ name, email, bio, birthday }) {
  const request = await client
    .from('profiles')
    .insert({ name, email, bio, birthday });
  return parseData(request);
}