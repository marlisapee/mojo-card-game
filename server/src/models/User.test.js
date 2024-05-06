const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { User, Deck } = require('../models');
const { db } = require('../db/config');

// define in global scope
let user;
let deck;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  user = await User.create({ username: 'gandalf' });
  deck = await Deck.create({ name: 'Fire Moves', xp: 500 });
  console.log(deck);
  await user.setDeck(deck);
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id');
  });

  it('has a username', async () => {
    expect(user.username).toBe('gandalf');
  });

  it('has a one to one association with Deck', async () => {
    expect(deck).toHaveProperty('UserId');
  });
});
