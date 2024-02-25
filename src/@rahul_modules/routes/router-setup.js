import express from "express";

export default class RouterSetup {
  constructor() {
    this.router = express.Router();
  }

  get(route, handler) {
    this.router.get(route, handler);
  }

  post(route, handler) {
    this.router.post(route, handler);
  }

  getRouter() {
    return this.router;
  }
}

