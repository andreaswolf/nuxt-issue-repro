import {describe, expect, test} from "vitest";
import qs from 'qs';

describe('qs', () => {
  test('can be loaded in tests', async () => {

    expect(qs.stringify({'foo': 'bar'})).to.equal('');
  });
});
