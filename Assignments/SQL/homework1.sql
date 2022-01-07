SELECT title, description FROM film;
--
SELECT * FROM film
WHERE film.length > 60 AND film.length < 75;
--
SELECT * FROM film
WHERE film.rental_rate='0.99' AND (film.replacement_cost='12.99' OR film.replacement_cost='28.99')
--
SELECT last_name FROM customer
WHERE customer.first_name='Mary';
--
SELECT * FROM film
WHERE NOT film.length>50 AND (film.rental_rate !=2.99 OR film.rental_rate !=4.99 );

/*
Homework Description:::

Merhabalar,

Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

film tablosunda bulunan title ve description sütunlarındaki verileri sıralayınız.
film tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük VE 75 ten küçük olma koşullarıyla sıralayınız.
film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99 VE replacement_cost 12.99 VEYA 28.99 olma koşullarıyla sıralayınız.
customer tablosunda bulunan first_name sütunundaki değeri 'Mary' olan müşterinin last_name sütunundaki değeri nedir?
film tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.
Kolay Gelsin.
*/
