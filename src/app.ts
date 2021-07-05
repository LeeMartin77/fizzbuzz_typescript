#!/usr/bin/env node
import { fizz_buzz } from "./fizzbuzz/fizzbuzz"

[...Array(100).keys()]
.map((integer: number) => integer + 1)
.forEach((integer: number) => {
    console.log(fizz_buzz(integer))
})