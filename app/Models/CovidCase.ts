export interface CovidCase {
  id: number;
  kode_kab: string;
  nama_kab: string;
  kode_kec: string;
  nama_kec: string;
  kode_kel: string;
  nama_kel: string;
  status: string;
  stage: string;
  umur: number;
  gender: string;
  longitude: number;
  latitude: number;
}