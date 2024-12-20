import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false, // true
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  }
})

export const QUERY_KEYS = {
  CURRENT_USER: 'qk-current-user'
}
