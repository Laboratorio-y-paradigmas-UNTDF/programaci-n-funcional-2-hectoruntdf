(ns tp04.ej15
  "Ejercicio 15 — Lazy sequences (5 pts). Trazabilidad: F-30")

;; Los primeros n pares positivos (2, 4, 6...).
(defn primeros-n-pares [n]
  (take n (iterate (partial + 2) 2)))

;; Secuencia infinita de Fibonacci. DEBE ser lazy.
(defn fibonacci []
  (letfn [(fib [a b]
            (lazy-seq (cons a (fib b (+ a b)))))]
    (fib 0 1)))

;; Toma elementos mientras sean menores que umbral.
(defn tomar-mientras-menor [coll umbral]
  (take-while #(< % umbral) coll))
