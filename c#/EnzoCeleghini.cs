using System;

namespace EnzoCeleghini_1_
{
    class Program
    {
        static void Main(string[] args)
        {
            int x;
            char opt, month;
            do
            {
                Console.WriteLine("Type a month: ");
                x = Convert.ToInt32(Console.ReadLine());
                if (x > 12 || x < 1)
                {
                    Console.WriteLine("\nError 05Dr7g2x. \n The number you typed doesn't correspond to a month, try again.");
                }
                if (x == 1)
                {
                    Console.WriteLine("\n The month is January.");
                    Console.WriteLine("\n January has 31 days.");
                }
                if (x == 2)
                {
                    Console.WriteLine("\n The month is February");
                    Console.WriteLine("\n Is this year a leap year?(y/n)");
                    month = char.Parse(Console.ReadLine());
                    if (month == 'y' || month == 'Y')
                    {
                        Console.WriteLine("\nThe month has 29 days");
                    }
                    else
                    {
                        Console.WriteLine("\nThe month has 28 days");
                    }
                }
                if (x == 3)
                {
                    Console.WriteLine("\nThe month is March");
                    Console.WriteLine("\nMarch has 31 days.");
                }
                if (x == 4)
                {
                    Console.WriteLine("\nThe month is Abril");
                    Console.WriteLine("\nApril 30 days.");
                }
                if (x == 5)
                {
                    Console.WriteLine("\nThe month is May");
                    Console.WriteLine("\nMay has 31 days.");
                }
                if (x == 6)
                {
                    Console.WriteLine("\nThe month is June");
                    Console.WriteLine("\nJune has 30 dias.");
                }
                if (x == 7)
                {
                    Console.WriteLine("\nThe month is July");
                    Console.WriteLine("\nJuly has 31 days.");
                }
                if (x == 8)
                {
                    Console.WriteLine("\n The month is August");
                    Console.WriteLine("\nAugust has 31 days.");
                }
                if (x == 9)
                {
                    Console.WriteLine("\nThe month is September");
                    Console.WriteLine("\nSeptember has 30 dias.");
                }
                if (x == 10)
                {
                    Console.WriteLine("\nThe month is October");
                    Console.WriteLine("\nOctober has 31 days.");
                }
                if (x == 11)
                {
                    Console.WriteLine("\nThe month is November");
                    Console.WriteLine("\nNovember has 30 days.");
                }
                if (x == 12)
                {
                    Console.WriteLine("\nThe month is December");
                    Console.WriteLine("\nDecember has 31 days.");
                }
                Console.WriteLine("\nWould you like to continue?(y/n)");
                opt = char.Parse(Console.ReadLine());
            }
            while (opcao == 'y' || opcao == 'Y');
            Console.ReadKey();
        }
    }
}
