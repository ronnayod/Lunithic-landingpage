import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('your_database_name');
    
    // ทดสอบดึงข้อมูลจาก collection
    const collection = db.collection('test');
    const data = await collection.find({}).limit(10).toArray();
    
    return NextResponse.json({ 
      success: true, 
      message: 'เชื่อมต่อ MongoDB สำเร็จ!',
      data 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'เชื่อมต่อ MongoDB ไม่สำเร็จ',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
