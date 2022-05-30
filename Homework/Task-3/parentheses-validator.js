function parenthesesValidator(parentheses){
    var regexp = /\(\)/;
    while (regexp.test(parentheses)) parentheses = parentheses.replace(regexp, "");
    return !parentheses;
}