using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
  public static string SpinWords(string sentence)
  {
        string[] words = sentence.Split(" ");
    for (int i = 0; i < words.Length; i++)
    {
        if (words[i].Length >= 5)
        {
            var arrOfLetters = words[i].ToCharArray();
            string reverse = String.Empty;
            for (int j = arrOfLetters.Length - 1; j > -1; j--)
            {
                reverse +=arrOfLetters[j];
            }
            words[i] = reverse;
        }
        
    }
    return String.Join(" ",words);
  }
}
