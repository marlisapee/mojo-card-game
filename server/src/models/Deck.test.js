const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Deck } = require('../models');
const { db } = require('../db/config');

let deck;

beforeAll(async () => {
  await db.sync({ force: true });
  deck = await Deck.create({
    name: 'Water Deck',
    mojo: 100,
    stamina: 100,
    imgUrl: 'image-example.com',
  });
});

afterAll(async () => await db.sync({ force: true }));

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id');
  });

  it('has a name', async () => {
    expect(deck.name).toBe('Water Deck');
  });

  it('has a stamina property', async () => {
    expect(deck).toHaveProperty('stamina');
  });
});
