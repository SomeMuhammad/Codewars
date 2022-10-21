public class Kata
{
    public static char FindMissingLetter(char[] arr)
    {
        for(int i = 0; i < arr.Length - 1; i++)
        {
            if(arr[i + 1] - arr[i] != 1) return (char)(arr[i] + 1);
            
        }
    
        return ' ';
    }
}
