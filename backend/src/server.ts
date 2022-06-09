import app from './app';
import express, { Express, Request, Response } from 'express';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
