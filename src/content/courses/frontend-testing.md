---
title: Frontend testing
description: You want to create high quality applications, reducing bugs and increasing development speed when scaling or maintaining your frontend, this course is for you!.
image: "../../assets/courses/frontend-testing.png"
layout: "../../layouts/Course.astro"
---

# Frontend testing with React, Jest, React testing library and Playwright

# 🙌 Propuesta

- 5 días de curso online, 4 horas por día (mañana o tarde) ⏰
- 1 día presencial (8 horas de trabajo en oficina) 💼
- Equipo
  - 6-10 personas
  - Mid/Senior
- Precio
  - A definir.
  - Bonificable por FUNDAE → [https://www.fundae.es/](https://www.fundae.es/)

> 🤞 Requisitos
>
> - ⌨️ Node +14
> - 📜 Git
> - 🕸️ Repo en común, todos con acceso al mismo.

> 🏋🏼 La modalidad de trabajo será con [https://www.codescouts.academy/blog/mob-programming/](https://www.codescouts.academy/blog/mob-programming/)

> 💡Opcional: Cada clase será grabada y subida al campus de CodeScouts automáticamente al finalizar cada sesión (workspace privado para ti) así los alumnos pueden repasar las clases, o verlas si no han podido asistir → [https://campus.codescouts.academy/](https://campus.codescouts.academy/)

# 📋 Temario

## 1️⃣ Día 1 - Test de lógica o de componentes 🤔

- 🤝 Presentación → ⏲️**10min**
- 🤲 Intro al curso explicación de la agenda de los 5 días → ⏲️**10min**
- 📕 Teoría → ⏲️**30min**
  - 🤔 ¿Qué es lo que buscamos con el testing frontend?
  - 🦿 Tipos de tests, repaso de la pirámide de testing.
  - 👀 Jest methods
  - 😡 Todos nuestros problemas están en el diseño
- 🏉 Ejercicio 1 - Test disruptivo ⏲️**90min**
  - Nuestro dominio tiene la razón.
  - Qué más da si el componente es visible o no
- 🥐 Break → ⏲️**10min**
- ⚽️ Ejercicio2 - Un buen test ⏲️**90min**
  - Buenas prácticas para que tu componente sea fácil de testear.
  - Tests y diseño rígido, a refactorizar…
- 🤔 Reflexión →⏲️**10min**
  - ¿Cuesta mucho esfuerzo testear?
  - ¿Problemas de diseño/arquitectura?
    - Cuando los equipos tienen problemas para testear sus aplicaciones pueden ocurrir 2 cosas.
      - El equipo no sabe hacer tests automatizados 🤦
      - La arquitectura del proyecto tiene graves problemas 🏗️

## 2️⃣ Día 2 - Tests de componentes, ¿testeando todo? 👀

- 🤝 Dudas de ayer → ⏲️**5min**
- 📕 Teoría → ⏲️**30min**
  - Cómo definimos el scope de un test
  - Buenas prácticas en tests de componentes
- 🏉 Ejercicio 1 - Test de comportamiento ⏲️**90min**
  - Cuando usar Mock, Spy, Stub
  - Recomendaciones al usar React testing library
- 🥐 Break → ⏲️**10min**
- ⚽️ Ejercicio2 - Test de visulización ⏲️**90min**
  - Buenas prácticas al diseñar un componente frontend testable
  - Cuando usar y cuando no Snapshots
- 🤔 Reflexión →⏲️**10min**
  - Prefieres testear comportamiento o visualización, ¿uno es consecuencia de lo otro?
  - Snapshots o `toHaveBeenCalledTimes`

## 3️⃣ Día 3 - Diseñando para tests 👀

- 🤝 Dudas de ayer → ⏲️**5min**
- 📕 Teoría → ⏲️**30min**
  - 🎡 Relación entre la arquitectura de nuestro proyecto y los tests que hagamos
    - Rigidez del diseño, rigidez de los tests
    - Rigidez de diseño, tests más costosos
    - Inyectando dependencias, simplificando tests
- 🎯 Ejercicio 1 - Refactorizando componentes para testearlos → ⏲️**90min**
  - Técnicas de refactorización de componentes para poder testear
  - Atomizando componentes
- 🥐 Break → ⏲️**10min**
- ⛳️ Ejercicio 2 - Tests que aportan valor vs Perdida de tiempo → ⏲️**90min**
  - Creando tests que aporten valor
  - Tests de red de seguridad
  - Confiabilidad
- 🤔 Reflexión →⏲️**10min**
  - ¿Qué tipo de tests son los que aportan valor?
  - ¿Cómo podemos hacer tests más confiables?

## 4️⃣ Día 4 - Testeando para diseñar 🏃

- 🤝 Dudas de ayer → ⏲️**5min**
- 🧩 ¿Que es Test-Driven development? → ⏲️**30min**
  - ¡No es test! Es diseño.
- 🎳 Ejercicio 1 - Cómo pensar tus componentes con TDD → ⏲️**90min**
  - Repasando las bases
  - Recomendaciones
  - Trucos mnemotécnicos
- 🥐 Break → ⏲️**10min**
- 🎾 Ejercicio 2 - TDD aplicado a nuestro dominio → ⏲️**90min**
- 🤔 Reflexión - Ventajas y Desventajas de TDD en frontend → ⏲️**10min**
  - Por qué no recomiendo hacer TDD para componentes.
    - No aportan tanto valor vs el esfuerzo que implica.

## 5️⃣ Día 5 - E2E & Clean architecture

- 🤝 Dudas de ayer → ⏲️**5min**
- **E2E tests**
  - 🐞 ¿Qué buscamos con un test E2E? → ⏲️**30min**
    - Repaso de rameworks de E2E más utilizados, pros y cons.
    - Gherkin en E2E
    - ¿Podría nuestro product owner crearlos?
  - 🖥️ Ejercicio 1 - Testeando como un usuario. → ⏲️**60min**
    - Test E2E con playwright.
- 🥐 Break → ⏲️**10min**
- **Clean architecture frontend**
  - 🤔 ¿Porqué clean architecture y qué relación tiene con los tests? → ⏲️**25min**
  - 🖌️ Ejercicio 2 - Testeando componentes con clean architecture → ⏲️**90min**
    - TDD con clean architecture
    - Testeando comportamientos del dominio
    - Delimitando el scope del tests hasta los servicios de dominio.
    - Inyectando dependencias facilmente
- 🙌 Feedback → ⏲️**10min**

## 💪 Día de consultoría (8 horas de trabajo juntos)

Este día consiste en trabajar mano a mano con el equipo, el objetivo principal es aterrizar los conceptos y prácticas aprendidas en el curso en el proyecto actual, también revisar junto al equipo los siguientes puntos.

- 🤔 Consultoría de arquitectura actual
- 😭 Revisión de pain points
- 🤜 Recomendaciones
- 🕸️ Refactorización
- 🦾 Margen de mejora
- 🧩 Revisión de potenciales módulos a priorizar el test
- 🕵️ Calidad de base de código y sugerencias de mejora
- 💣 ¿Diseño rígido, separación de responsabilidades claras?

# 🥋 Coach

## Damián Pumar

![Damián Pumar](https://file.notion.so/f/f/ba17bbad-ae59-467a-bb77-35c3709ee3c2/2cb40dec-e22b-4199-b592-bebbadc94a3e/53083954438_49bb5babf0_c.jpg?id=17b5ddfe-998c-4ced-ba79-dda069a7a11f&table=block&spaceId=ba17bbad-ae59-467a-bb77-35c3709ee3c2&expirationTimestamp=1710331200000&signature=nF-wN4cfgqwizcIhY-M5cuLTbdYpuX6NbEg9EH-ZXo0&downloadName=53083954438_49bb5babf0_c.jpg)

### Technical coach / Software craftsman / Speaker

🌐 [https://damianpumar.com/](https://damianpumar.com/)

🐦 [https://twitter.com/damianpumar](https://twitter.com/damianpumar)

> 🎤Latest speaker conference 👉
> [https://www.damianpumar.com/events/](https://www.damianpumar.com/events/)
