using System;

namespace EnzoCeleghini5
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b, sum = 0, x;

            Console.Write("\nEnter a number: ");
            x = Convert.ToInt32(Console.ReadLine());
            Console.Write("\nEnter another number: ");
            b = Convert.ToInt32(Console.ReadLine());
            while (x <= b)
            {
                if ((x % 3) == 0)
                {
                    sum += x;
                }
                x++;
            }
            Console.WriteLine("\nThe sum is: " + sum);
        }
    }
}