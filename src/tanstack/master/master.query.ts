import { useQuery } from '@tanstack/react-query';
import {
  getApplicationStatus,
  getBlocks,
  getBoards,
  getCategories,
  getClassMasters,
  getDistricts,
  getGenders,
  getRelationships,
  getReligions,
  getSubDivisions,
} from './master.api';

export const useApplicationStatus = () => {
  return useQuery({
    queryKey: ['application-status'],
    queryFn: ({ signal }) => getApplicationStatus(signal),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

// -----------------

export const useRelationships = () => {
  return useQuery({
    queryKey: ['relationships'],
    queryFn: ({ signal }) => getRelationships(signal),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

// -----------------

export const useGenders = () => {
  return useQuery({
    queryKey: ['genders'],
    queryFn: ({ signal }) => getGenders(signal),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

// -----------------

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: ({ signal }) => getCategories(signal),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

// -----------------

export const useReligions = () => {
  return useQuery({
    queryKey: ['religions'],
    queryFn: ({ signal }) => getReligions(signal),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

// -----------------

export const useBoards = () => {
  return useQuery({
    queryKey: ['boards'],
    queryFn: ({ signal }) => getBoards(signal),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

// -----------------

export const useClassMasters = () => {
  return useQuery({
    queryKey: ['class-masters'],
    queryFn: ({ signal }) => getClassMasters(signal),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

// -----------------

export const useDistricts = () => {
  return useQuery({
    queryKey: ['districts'],
    queryFn: ({ signal }) => getDistricts(signal),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

// -----------------

export const useSubDivisions = (district: string) => {
  return useQuery({
    queryKey: ['districts', district],
    queryFn: ({ signal }) => getSubDivisions(signal, district),
  });
};

// -----------------

export const useBlocks = (district: string) => {
  return useQuery({
    queryKey: ['districts', district],
    queryFn: ({ signal }) => getBlocks(signal, district),
  });
};
