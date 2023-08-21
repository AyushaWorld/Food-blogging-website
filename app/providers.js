'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

function Providers({ children } ) {

  return (
    <CacheProvider>
    <ChakraProvider>
      {children}
    </ChakraProvider>
  </CacheProvider>
  )
}

export default Providers;