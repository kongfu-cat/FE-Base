// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配

// 递归
function match (s, pattern) {
    let sp = 0, pp = 0
    if (s.length == 0 && pattern.length == 0) return true
    if (pattern.length = 0 && s.legnth > 0) return false
    if (pattern[pp + 1] != '*') {
        if ((s[sp] && pattern[pp] == '.') || s[sp] == pattern[pp]) {
            return match(s.slice(sp + 1), pattern.slice(pp + 1))
        } else {
            return false
        }
    } else {
        if (s[sp] == pattern[pp] || (s[sp] && pattern[pp] == '.')) {
            return match(s.slice(sp + 1), pattern) ||
                // "bbbba",".*a*a"
                match(s, pattern.slice(pp + 2))
        } else {
            return match(s, pattern.slice(pp + 2))
        }
    }
    return true
}