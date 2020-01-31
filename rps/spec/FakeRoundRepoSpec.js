import {FakeRoundRepo} from './FakeRoundRepo'
import {roundRepoContract} from './RoundRepoContract'

describe('fake round repo', () => {
    roundRepoContract(FakeRoundRepo)
})
