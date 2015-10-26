/**
 * Created with JetBrains WebStorm.
 * User: svjatoslav.kondratov
 * Date: 10/15/15
 * Time: 5:10 PM
 * To change this template use File | Settings | File Templates.
 */

QUnit.test('check palindrome function', function (assert) {
    assert.strictEqual(checkPalindrom('aaa'), true, " \'aaa\' is a simple palindrome of letters type");
    assert.strictEqual(checkPalindrom('111'), true, "\'111\' is a simple palindrome if numbers type");
    assert.strictEqual(checkPalindrom('1MadamImAdam1'), true, "\'1MadamImAdam1\' is a complicated palindrome ");
    assert.strictEqual(checkPalindrom(' ! ;: :; ! '), true, "\' ! ;: :; ! \' is a simple palindrome of characters");
    assert.strictEqual(checkPalindrom('♀♂♂♀'), true, "♀♂♂♀ is a simple palindrome of characters ");
    assert.strictEqual(checkPalindrom('    '), true, "\'   \' is a simple palindrome of spaces");
    assert.strictEqual(checkPalindrom(' '), true, " \' \'String is a palindrome of a single space")
    assert.strictEqual(checkPalindrom('a'), true, "\' a\' is a palindrome of a single letter")
    assert.strictEqual(checkPalindrom('1'), true, " \'1\' is a palindrome of a single number")
    assert.strictEqual(checkPalindrom('!'), true, "\'!\' is a palindrome of a single character")
    assert.strictEqual(checkPalindrom('abc'), false, "\'abc\' is not a palindrome");
    assert.strictEqual(checkPalindrom('Madam I\'m Adam, it\'s nice to meet you12 !')
        , false, "\'Madam I\'m Adam, it\'s nice to meet you12 !\' is not a palindrome");
    assert.strictEqual(checkPalindrom('123'), false, "\'123\' is not a palindrome");
    assert.strictEqual(checkPalindrom(' !;:\" '), false, "\' !;:\" \' is not a palindrome");
    assert.strictEqual(checkPalindrom(''), false, "Empty string is not a palindrome");
    assert.strictEqual(checkPalindrom('♀♪♪♂'), false, "♀♪♪♂ is not a palindrome of characters");
});
QUnit.test('find and sort palindrome function', function (assert) {
    assert.expect(4);
    assert.propEqual(findPalindrome(['aa', '121'], checkPalindrom), ["121", "aa"]
        , 'Should return array [121,aa] since enter array was [aa,121]');
    assert.propEqual(findPalindrome([], checkPalindrom), []
        , 'Should return empty array since input array was empty');
    assert.propEqual(findPalindrome(['123', 'abc', 'An taro Tassadar'], checkPalindrom), []
        , 'Should return empty array since in there is no palindromes in input array');
    assert.propEqual(findPalindrome(['madam', 'adam', 'An taro Adun', '222'], checkPalindrom), ['madam', '222']
        , 'Should return [madam,222] array since these are only palindromes in [madam,adam,An taro Adun,222] array');
});
QUnit.test('create array of phrases from input string function', function (assert) {
    assert.propEqual(getMessageArray('abba'), ['ab', 'abb', 'abba', 'bb', 'bba', 'ba']
        , 'Should return [ab,abb,abba,bb,bba,ba] array since input was abba');
    assert.propEqual(getMessageArray(''), []
        , 'Should return empty array since input was empty string');
    assert.propEqual(getMessageArray('12345'), ['12', '123', '1234', '12345', '23', '234', '2345', '34', '345', '45']
        , 'Should return [12,123,1234,12345,23,234,2345,34,345,45] since input was 12345');
    assert.propEqual(getMessageArray('   '), ['  ', '   ', '  '], 'Should return array consisting from 3 elemetns of ' +
    'spaces since string was three spaces');
    assert.propEqual(getMessageArray(' '), [], 'Should return empty array since input string was \' \'');
    assert.propEqual(getMessageArray('1'), [], 'Should return empty array since input stirng was 1');
    assert.propEqual(getMessageArray('a'), [], 'Should return empty array since input string was a');
    assert.propEqual(getMessageArray('!'), [], 'Should return empty array since input string was !');
    assert.propEqual(getMessageArray('!;@'), ['!;', '!;@', ';@'], 'Should return [!;,!;@,;@] array since input string' +
    ' was !;@');
});
QUnit.test('printAnswer function', function (assert) {
    printAnswer(['aaa', '11', '!!', '  ', '']);
    var results = document.getElementById('results').getElementsByTagName('p');
    strictEqual(results[0].innerHTML,
        'Following palindromes found:', "Expected result is \'Following palindromes found:\'");
    strictEqual(results[1].innerHTML, 'aaa', 'Expected result is \'aaa\'');
    strictEqual(results[2].innerHTML, '11', 'Expected result is \'11\'');
    strictEqual(results[3].innerHTML, '!!', 'Expected result is \'!!\'');
    strictEqual(results[4].innerHTML, '  ', 'Expected result is \'  \'');
    strictEqual(results[5].innerHTML, '', 'Expected result is empty string');
    printAnswer([]);
    strictEqual(results[0].innerHTML,
        'There is no palindrome in entered string', "Expected result is \'There is no palindrome in entered string\'");

});