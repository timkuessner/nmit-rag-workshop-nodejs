/**
 * Jest test for knowledgeBase search logic
 */

const knowledgeBase = require('../server/data/knowledgeBase');

describe('Knowledge Base Search', () => {
  test('should return a matching item for a known question', () => {
    const query = 'node.js';
    const result = knowledgeBase.find(item =>
      item.question.toLowerCase().includes(query)
    );

    expect(result).toBeDefined();
    expect(result.answer).toMatch(/node\.js/i);
  });

  test('should return undefined for unknown query', () => {
    const query = 'quantum computing';
    const result = knowledgeBase.find(item =>
      item.question.toLowerCase().includes(query)
    );

    expect(result).toBeUndefined();
  });
});
