using System;

namespace EnzoCeleghini3
{
    class Program
    {
        static void Main(string[] args)
        {
            int i, x, y, z, cont=0, sum=0; 
            for (x = 0; x < 12; x++)
            {
                for (i = 1; i < 4; i++)
                {
                    Console.WriteLine("\n Enter the grade: " + i + ":");
                    y = Convert.ToInt32(Console.ReadLine());
                    sum += y;
                }
                z = sum / 3;
                if (z >= 10)
                {
                    cont++;
                }
                Console.WriteLine("\nNew student: ");
            }
            Console.WriteLine("\nStudents whose grade was greater than 10 : " + cont);
        }
    }
}