using System.Collections.Generic;
public class Deadfish
{
  public static int[] Parse(string data)
  {
      List<int> results = new List<int>();
    int num = 0;
    foreach (var letter in data)
    {
        if (letter == 'i') num++;
        else if (letter == 'd') num--;
        else if (letter == 's') num *= num;
        else if(letter == 'o') results.Add(num);
    }

    int[] result = results.ToArray();

    return result;
  }
}
