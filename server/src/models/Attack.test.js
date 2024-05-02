const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Attack } = require('../models');
const { db } = require('../db/config');

let attack;

beforeAll(async () => {
  await db.sync({ force: true });
  attack = await Attack.create({
    title: 'Fire Blast',
    mojoCost: 30,
    staminaCost: 20,
  });
});

afterAll(async () => await db.sync({ force: true }));

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id');
  });

  it('has a title', async () => {
    expect(attack.title).toBe('Fire Blast');
  });

  it('has an staminaCost property', async () => {
    expect(attack).toHaveProperty('staminaCost');
  });
  it('has an mojoCost property', async () => {
    expect(attack).toHaveProperty('mojoCost');
  });
});
