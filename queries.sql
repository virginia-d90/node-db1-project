-- Database Queries

-- Find all customers with postal code 1010

select * from customers
where postalcode = 10101;

-- Find the phone number for the supplier with the id 11

select phone from suppliers where supplierID = 11

-- List first 10 orders placed, sorted descending by the order date
SELECT * FROM [Orders]
order by OrderDate desc
limit 10;
-- Find all customers that live in London, Madrid, or Brazil
Select * from customers
Where city = 'London'
or city = 'Madrid'
or country = 'Brazil';
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

insert into customers (customerName, contactName, Address, City, PostalCode, Country)
Values ('The Shire', 'Bilbo Baggins','1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth');
-- Update Bilbo Baggins record so that the postal code changes to "11122"
update customers
set postalcode = '11122'
where customerid = 92;
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
Select distinct city from customers

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT suppliername from suppliers
Where length(supplierName) > 20