function sorting(tab) {
  for (let i = 0; i < tab.length; i++) {
    var current = tab[i];
    var j = i - 1;
    while (j >= 0 && tab[j] > current) {
      tab[j + 1] = tab[j];
      j--;
    }
    tab[j + 1] = current;
  }
  return tab;
}
console.log(sorting([2, 1, 3, 4, 5]));
