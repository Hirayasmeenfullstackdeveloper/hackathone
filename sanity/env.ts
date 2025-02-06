export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-28'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skSnVxX79lnly0nRAJwM5HzVpxXm336HN2rpFkyHWVqsZZF89YIuC3zMn1yPXaAfczi4yaWsC55qzzTo0FFSUCkHzXhvFMMtLYWwl23CFJgwuFiPSf9SAQ0wgq63kb12cFFGYqOGgq6kAGR2efNYv7vLwWtiVRDfTIwI0I723reMQ1u9Ltqn",
  'Missing environment variable: SANITY_API_TOKEN'
)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
