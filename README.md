# Описание задачи

Есть две основные структуры данных, описывающие товар: интерфейс `Model` и набор параметров товара (`params: Param[]`).

## Требования к реализации

- Реализовать на React компоненты, которые позволяют редактировать структуру `Model` — то есть устанавливать значения параметров.
- Все параметры должны отображаться сразу и быть доступны для редактирования.
- Значения параметров, переданные в `params`, должны быть установлены в форме редактирования по умолчанию.
- Должен быть реализован метод `getModel()`, возвращающий полную структуру с актуальными значениями всех параметров.
- Решение должно быть легко расширяемым, чтобы в будущем можно было добавлять новые типы параметров (например, числовые или с выбором из списка).
- В текущей реализации необходимо поддерживать только текстовые параметры — поля ввода (`Input`) с типом `string`.

#### clone this repository (ssh)
https://github.com/Lika1998Lika/test-task-selsup# 
#### install dependencies
npm install
#### run locally
npm run dev
