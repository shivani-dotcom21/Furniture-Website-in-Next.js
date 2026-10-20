"use client"

import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

export let store = configureStore(
    {
        reducer:{
            auth: authSlice
        }
    }
)