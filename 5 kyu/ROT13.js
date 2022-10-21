using System;

public class Kata
{
  public static string Rot13(string message)
  {
    char[] res = new char[message.Length];
    for (int i = 0; i < message.Length; i++)
    {
        if (Char.IsLetter(message[i]))
        {
            int lett = message[i];
            if (message[i].ToString() == message[i].ToString().ToUpper())
            {
                if (lett <= 90 && lett >= 65)
                {
                    int letter13 = lett + 13;
                    if (letter13 <= 90)     res[i] = (char)(letter13);
                    else if (letter13 > 90) res[i] = (char)(letter13 - 26);
                    
                }
            }
            else
            {
                if (lett <= 122 && lett >= 97)
                {
                    int letter13 = lett + 13;
                    if (letter13 <= 122) res[i]     = (char)letter13;
                    else if (letter13 > 122) res[i] = (char)(letter13 - 26);
                    
                }
            }
        }
        else res[i] = message[i]; 
        
    }
    return String.Join("",res);
  }
}
