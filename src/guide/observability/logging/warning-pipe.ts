import { Effect } from "effect"

// $ExpectType Effect<never, never, void>
const program = Effect.fail("Something went wrong!").pipe(
  Effect.catchAll((error) => Effect.logWarning(String(error)))
)

Effect.runPromise(program)
/*
timestamp=... level=WARN fiber=#0 message="Something went wrong!"
*/
