import Results from '@/components/Results'

const Series = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'tv/top_rated' : 'trending/tv/week'
    }?api_key=${process.env.API_KEY}&language=en-US%page=1`,
    { next: { revalidate: 10000 } }
  )
  const data = await res.json()
  const results = data.results

  return (
    <div>
      <Results results={results} />
    </div>
  )
}
export default Series
