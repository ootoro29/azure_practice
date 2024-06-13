/*
import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../lib/db';

type User = {
  id: number;
  name: string;
};

/*
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { rows } = await pool.query<User>('SELECT id, name FROM users');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Internal Serv

*/

import { NextResponse } from "next/server";
import pool from '../../../lib/db';
type User = {
  id: number;
  name: string;
};

export async function GET() {
  try {
     const { rows } = await pool.query<User>('SELECT id, name FROM users');
     return NextResponse.json(rows);
   } catch (error) {
     throw error
   }
 }