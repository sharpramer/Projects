using System;

ficha_psinf namespace
{
    class Program
    {
        static void Main(string[] args)
        {
            int averagesalaries = 0, counter = 0, minority = 1000, maiority = 0, accountantwoman = 0, salaryminimum = 1000;
            char option;
            do
            {
                Console.Write("Enter your age: ");
                int age = Convert.ToInt32(Console.ReadLine());
                Console.Write("\nEnter your gender(m/w): ");
                char sex = char.Parse(Console.ReadLine());
                Console.Write("\nEnter your salary (in euros): ");
                int salary = Convert.ToInt32(Console.ReadLine());
                counter++;
                int averagewages = salary / counter;
                if (age < minority)
                {
                    minority = age;
                }
                if (age > maiority)
                {
                    age = maiority;
                }
                if (gender == 'f' || gender == 'F')
                {
                    counterwoman++;
                }
                if (salary < lowestsalary)
                {
                    salaryminor = salary;
                }
                Console.WriteLine("\nThe person with the lowest salary is " + age + " years old and gender is: " + gender);
                Console.WriteLine("\nAverage wages are: " + averagewages + "\nThe lowest age is: " + minor + "\nThe highest age is: " + majority + "\nThe number of women is: " + counterwoman);
                Console.WriteLine("\nDo you want to introduce more people?(y/n)");
                option = char.Parse(Console.ReadLine());
            }
            while (option == 'y');
        }
    }
}