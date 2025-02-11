import { getURL } from '../../src/utils/url';

describe('getURL', () => {
  test('should return empty string for missing param', () => {
    expect(getURL()).toEqual('');
  });

  test('should return empty string for empty string', () => {
    expect(getURL('')).toEqual('');
  });

  test('should add valid protocol if missing', () => {
    const url = 'react-pdf.org';
    expect(getURL(url)).toEqual('http://react-pdf.org');
  });

  test('should return same url if protocol present', () => {
    const url = 'http://react-pdf.org';
    expect(getURL(url)).toEqual('http://react-pdf.org');
  });

  test('should support https protocol', () => {
    const url = 'https://react-pdf.org';
    expect(getURL(url)).toEqual('https://react-pdf.org');
  });

  test('should support mailto protocol', () => {
    const url = 'mailto:test@example.com';
    expect(getURL(url)).toEqual('mailto:test@example.com');
  });

  test('should support skype protocol', () => {
    const url = 'skype:username';
    expect(getURL(url)).toEqual('skype:username');
  });

  test('should support twitter protocol', () => {
    const url = 'twitter://post?message=Hey';
    expect(getURL(url)).toEqual(url);
  });

  test('should support whatsapp protocol', () => {
    const url = 'whatsapp://send?text=Hey';
    expect(getURL(url)).toEqual(url);
  });

  test('it should return the value if it is a id and not url', () => {
    const src = '#myDest';
    expect(getURL(src)).toBe(src);
  });
});
