import { Effect, Chunk } from "effect"
import * as ReadLine from "./ReadLine"

const loop = (
  state: Chunk.Chunk<string>
): Effect.Effect<never, never, Chunk.Chunk<string>> =>
  ReadLine.readLine("Please enter a name or `q` to exit: ").pipe(
    Effect.flatMap((name) => {
      if (name === "q") {
        return Effect.succeed(state)
      } else {
        return loop(Chunk.append(state, name))
      }
    })
  )

const getNames = loop(Chunk.empty())

Effect.runPromise(getNames).then((result) => console.log(String(result)))
/*
Please enter a name or `q` to exit: Alice
Please enter a name or `q` to exit: Bob
Please enter a name or `q` to exit: q
Chunk(Alice, Bob)
*/
