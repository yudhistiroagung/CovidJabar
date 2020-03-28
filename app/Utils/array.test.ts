import { groupArrayBy } from './array';
import { CovidCase } from 'app/Models';

describe('Array utils tests', () => {

  describe('#groupArrayBy', () => {

    it('test 1', () => {
      const cases: CovidCase[] = [
        {
          id: 1,
          kode_kab: '123',
          nama_kab: 'AAA',
          kode_kec: '321',
          nama_kec: 'CCC',
          kode_kel: '321',
          nama_kel: 'ttt',
          status: 'ODP',
          stage: 'process',
          umur: 44,
          gender: 'perempuan',
          longitude: 0,
          latitude: 0
        },
        {
          id: 1,
          kode_kab: '123',
          nama_kab: 'AAA',
          kode_kec: '321',
          nama_kec: 'CCC',
          kode_kel: '321',
          nama_kel: 'ttt',
          status: 'ODP',
          stage: 'process',
          umur: 44,
          gender: 'perempuan',
          longitude: 0,
          latitude: 0
        },
        {
          id: 1,
          kode_kab: '124',
          nama_kab: 'AAA',
          kode_kec: '321',
          nama_kec: 'CCC',
          kode_kel: '321',
          nama_kel: 'ttt',
          status: 'ODP',
          stage: 'process',
          umur: 44,
          gender: 'perempuan',
          longitude: 0,
          latitude: 0
        }
      ];

      const result = groupArrayBy(cases, (obj: CovidCase) => obj.kode_kab);

      expect(result['123'].length).toBe(2)
      expect(result['124'].length).toBe(1)
    });

  })

})