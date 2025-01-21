# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that leads to an infinite loop.  The bug arises from incorrectly specifying the dependency array, causing the effect to run repeatedly, resulting in an infinite loop.  The solution shows how to correctly manage dependencies to avoid this issue.

## Bug Description
The `useEffect` hook is designed to perform side effects after rendering.  In this case, the `setCount` function is called within the `useEffect` which, with the current dependency array, creates a change to the `count` state. This change triggers a re-render, causing the `useEffect` to be run again and the loop continues. 

## Solution
The solution involves correctly setting the dependency array to avoid triggering the effect unnecessarily.