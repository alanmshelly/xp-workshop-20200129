import {Round} from '../src/Requests'

export function roundRepoContract(roundRepoClass) {
    describe('round repo contract', () => {
        let repo

        beforeEach(() => {
            repo = new roundRepoClass()
        })

        describe('when no rounds have been saved', () => {
            it('is empty', () => {
                expect(repo.isEmpty()).toEqual(true)
            })
        })

        describe('when rounds have been saved', () => {
            let round

            beforeEach(() => {
                round = new Round('foo', 'bar', 'hoge')
                repo.save(round)
            })

            it('is not empty', () => {
                expect(repo.isEmpty()).toEqual(false)
            })

            it('returns rounds that have been saved', () => {
                const allRounds = repo.getAll()


                expect(allRounds).toEqual([round])
            })
        })
    })
}
