import { master } from '@/api/master.api';
import { simpleFetch } from '@/axios/simple.fetch';

export const getApplicationStatus = async (signal: AbortSignal) => {
  const res = await simpleFetch.get(master.applicatonStatus, {
    signal,
  });
  return res.data.data;
};

// --------------------

export const getRelationships = async (signal: AbortSignal) => {
  const res = await simpleFetch.get(master.relationships, {
    signal,
  });
  return res.data.data;
};

// --------------------

export const getGenders = async (signal: AbortSignal) => {
  const res = await simpleFetch.get(master.genders, {
    signal,
  });
  return res.data.data;
};

// --------------------

export const getCategories = async (signal: AbortSignal) => {
  const res = await simpleFetch.get(master.categories, {
    signal,
  });
  return res.data.data;
};

// --------------------

export const getReligions = async (signal: AbortSignal) => {
  const res = await simpleFetch.get(master.religions, {
    signal,
  });
  return res.data.data;
};

// --------------------

export const getBoards = async (signal: AbortSignal) => {
  const res = await simpleFetch.get(master.boards, {
    signal,
  });
  return res.data.data;
};

// --------------------

export const getClassMasters = async (signal: AbortSignal) => {
  const res = await simpleFetch.get(master.classMasters, {
    signal,
  });
  return res.data.data;
};

// --------------------

export const getDistricts = async (signal: AbortSignal) => {
  const res = await simpleFetch.get(master.districts, {
    signal,
  });
  return res.data.data;
};

// --------------------

export const getSubDivisions = async (
  signal: AbortSignal,
  district: string,
) => {
  const res = await simpleFetch.get(master.subDivisions, {
    params: { district: district },
    signal,
  });
  return res.data.data;
};

// --------------------

export const getBlocks = async (signal: AbortSignal, district: string) => {
  const res = await simpleFetch.get(master.blocks, {
    params: { district: district },
    signal,
  });
  return res.data.data;
};
