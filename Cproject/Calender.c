#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
//Name: Darragh Breslin

int is_leap(int year); //initialisng my functions
int new_years_day(int year);
int no_of_days(int year, int month);
int first_day(int year, int month);
void print_month(int firstday, int noofdays);

int main(int argc, char* argv[]) {
	// the user should supply 3 arguments:
	// 1: year number
	// 2: start month number
	// 3: end month number
	int year = atoi(argv[1]); //getting each user arguement into a variable so it is easier to use
	int month = atoi(argv[2]);
	int endMonth = atoi(argv[3]);
	int numdays = no_of_days(year, month);
	int firstday = first_day(year, month);
	printf("%d %d %d", year, month, endMonth);
	for (int i = month; i <= endMonth; i++) { //looping through from the start month to the end month while calling the print month function each time
		printf("\nYear: %d    Month: %d\n", year, i);
		print_month(first_day(year, i), no_of_days(year, i));
	}
	
}

int is_leap(int year) { // find if the year is a leap year or not
	if (year % 400 == 0)
		return 1;
	if (year % 100 == 0)
		return 0;
	if (year % 4 == 0)
		return 1;
	return 0;
}

int new_years_day(int year) {
	// return day of the week (0-6, where Sun=0) that new year's day falls on for the given year
	int dayNum = 1;
	for (int i = 1900; i < year; i++) {
		dayNum += 365 + is_leap(i);
		return (dayNum % 7);
	}
}

int no_of_days(int year, int month) {
	// return number of days in the given month in the given year
	if (month == 9 || month == 4 || month == 6 || month == 11)
		return 30;
	if (month != 2)
		return 31;
	return (28 + is_leap(year));
}

int first_day(int year, int month) {
	// return day of the week (0-6) that the 1st of the given month falls on, in the given year
	int daynumber = new_years_day(year); // day of week of Jan 1 this year
	for (int i = 1; i < month; i++) // loop for each elapsed month this year
		daynumber += no_of_days(year, i);  // add days in each elapsed month
	daynumber %= 7;
	return daynumber;
}

void print_month(int firstday, int noofdays) {
	printf("\n Sun Mon Tue Wed Thu Fri Sat\n");
	
	for (int i = 0; i < firstday; i++) { // print 
		printf("    ");
		
	}
	for (int i = 1; i <= noofdays; i++) {
		//added space to format it better for single digits e.g. 1-9
		if (i < 10) {
			printf(" ");
		}
		printf(" %d ", i);

		// If the current day is the last day of a week, start a new row
		if ((i + firstday) % 7 == 0) {
			printf("\n");
		}
	}

	//formating for end of the calender to add blank spaces
	if ((noofdays + firstday - 1) % 7 != 6) {
		for (int i = 0; i < 7 - (noofdays + firstday - 1) % 7; i++) {
			printf("    ");
		}
	}
	//add a new line for next output
	printf("\n");
