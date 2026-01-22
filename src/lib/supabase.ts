/**
 * Cliente de Supabase
 * 
 * Este archivo configura el cliente de Supabase para autenticación y datos.
 * Las credenciales deben configurarse en las variables de entorno.
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

// Crear cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Tipos de datos para la aplicación
 */

export interface Estudiante {
  id: string;
  nombre: string;
  apellido: string;
  padre_id: string;
}

export interface RegistroComida {
  id: string;
  estudiante_id: string;
  fecha: string;
  estado: 'bien' | 'regular' | 'mal';
  comentario?: string;
  monitor_nombre?: string;
}

export interface MenuDia {
  id: string;
  fecha: string;
  dia_semana: string;
  primer_plato: string;
  segundo_plato: string;
  postre: string;
}

/**
 * Funciones de autenticación
 */

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

/**
 * Funciones de datos
 */

// TODO: Implementar cuando Supabase esté configurado
export async function getEstudiantePorPadre(padreId: string): Promise<Estudiante | null> {
  // const { data, error } = await supabase
  //   .from('estudiantes')
  //   .select('*')
  //   .eq('padre_id', padreId)
  //   .single();
  
  // return data;
  return null;
}

// TODO: Implementar cuando Supabase esté configurado
export async function getRegistroHoy(estudianteId: string): Promise<RegistroComida | null> {
  // const hoy = new Date().toISOString().split('T')[0];
  // const { data, error } = await supabase
  //   .from('registros_comida')
  //   .select('*')
  //   .eq('estudiante_id', estudianteId)
  //   .eq('fecha', hoy)
  //   .single();
  
  // return data;
  return null;
}

// TODO: Implementar cuando Supabase esté configurado
export async function getMenuSemanal(): Promise<MenuDia[]> {
  // const { data, error } = await supabase
  //   .from('menu_semanal')
  //   .select('*')
  //   .order('fecha', { ascending: true });
  
  // return data || [];
  return [];
}
