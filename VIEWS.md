# Dashboard

- `/`
 - statystyki dzisiejszych zamówień (zdalne i lokalne)
 - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
 - wybór daty i godziny
 - tabela z listą rezerwacji i wydarzeń
  - każda kolumna = 1 stolik
  - każdy wiersz = 30 minut
  - ma przypominać widok kalendarza z googla gdzie w kolumnach zamiast dni są stoliki
  - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking:id`
 - zawiera wszystkie informacje dotyczące rezerwacji
 - umożliwia edycję i zapisywanie zmian
- `/tables/booking/new`
 - analogicznie do poprzedniej, bez początkowych informacji
- `/tables/events:id`
 - - analogicznie do poprzedniej, dla eventów
- `/tables/events/new`
 - - analogicznie do poprzedniej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- `/waiter/order/:id`
  - jak powyższa

# Widok kuchni

- `/kitchen`
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - ma liście musi być możliwość oznaczenia jako zrealizowane