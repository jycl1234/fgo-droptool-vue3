import { describe, it, expect } from 'vitest'
import { mats } from '@/static/mats'
import { getImgUrl } from '../utils'

describe('Utils test', () => {
  const mat = mats[0]

  it('works as expected', () => {
    const result = getImgUrl(mat)
    expect(result).toBe(`https://static.atlasacademy.io/JP/Items/${mat.filename}_bordered.png`)
  })
})
