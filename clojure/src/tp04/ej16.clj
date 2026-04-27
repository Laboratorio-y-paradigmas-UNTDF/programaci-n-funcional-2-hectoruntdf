(ns tp04.ej16
  "Ejercicio 16 — DSL data-driven (5 pts). Trazabilidad: F-31"
  (:require [clojure.string :as str]))

;; Vector de reglas: {:field :name, :pred fn, :msg "..."}
(def user-rules
  [{:field :name, :pred #(not (str/blank? (str %))), :msg "nombre no puede estar vacío"}
   {:field :email, :pred #(str/includes? (str %) "@"), :msg "email debe contener @"}
   {:field :age, :pred #(and (number? %) (>= % 18)), :msg "edad debe ser un número mayor o igual a 18"}])

;; Aplica todas las reglas a data. Retorna vector de {:field :error} (vacío si ok).
(defn validate [rules data]
  (reduce (fn [acc {:keys [field pred msg]}]
            (if (pred (get data field))
              acc
              (conj acc {:field field :error msg})))
          []
          rules)
  )

;; true si no hay errores.
(defn valid? [rules data]
  (empty? (validate rules data)))
