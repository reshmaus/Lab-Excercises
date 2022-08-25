SELECT *
FROM invoice_line
WHERE unit_price IN (
  SELECT unit_price FROM invoice_line WHERE unit_price > .99
);